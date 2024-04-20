package com.bezkoder.springjwt.service;

import com.bezkoder.springjwt.models.ERole;
import com.bezkoder.springjwt.models.Role;
import com.bezkoder.springjwt.models.User;
import com.bezkoder.springjwt.payload.request.LoginRequest;
import com.bezkoder.springjwt.payload.request.SignupRequest;
import com.bezkoder.springjwt.repository.RoleRepository;
import com.bezkoder.springjwt.repository.UserRepository;
import com.bezkoder.springjwt.security.jwt.JwtUtils;
import com.bezkoder.springjwt.security.services.UserDetailsImpl;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import javax.management.relation.RoleNotFoundException;
import java.util.HashSet;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class AuthService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder encoder;
    private final JwtUtils jwtUtils;
    private final AuthenticationManager authenticationManager;

    public AuthService(UserRepository userRepository,
                       RoleRepository roleRepository,
                       PasswordEncoder encoder,
                       JwtUtils jwtUtils,
                       AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.encoder = encoder;
        this.jwtUtils = jwtUtils;
        this.authenticationManager = authenticationManager;
    }

    public String authenticate(LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        return jwtUtils.generateJwtToken(authentication);
    }

    public UserDetailsImpl getUserDetails(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
        return UserDetailsImpl.build(user);
    }

    public void validateSignupRequest(SignupRequest signUpRequest) {
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            throw new Error("Error: Username is already taken!");
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            throw new Error("Error: Email is already in use!");
        }
    }

    //Get User by email
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with email: " + email));
    }
    public static boolean isBlank(String str) {
        return str == null || str.isEmpty() || str.trim().isEmpty();
    }

    public User createNewUser(SignupRequest signUpRequest) {
        // Validate input data (example)
        if (isBlank(signUpRequest.getUsername())) {
            throw new IllegalArgumentException("Username cannot be empty");
        }
        if (signUpRequest.getUsername() == null || signUpRequest.getUsername().trim().isEmpty()) {
            throw new IllegalArgumentException("Username cannot be empty");
        }

        // Create user object
        User user = new User(
                signUpRequest.getUsername(),
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword())
        );

        Set<Role> roles = new HashSet<>(); // Initialize roles as an empty set

        // Check if getRole() returns null before proceeding
        if (signUpRequest.getRole() != null) {
            // Map string roles to ERole values
            Map<String, ERole> roleMap = Map.of(
                    "admin", ERole.ROLE_ADMIN,
                    "mod", ERole.ROLE_MODERATOR,
                    // Default role
                    "", ERole.ROLE_USER
            );

            // Get roles from request and map to ERole
            roles = signUpRequest.getRole().stream()
                    .map(roleName -> {
                        try {
                            return roleRepository.findByName(roleMap.getOrDefault(roleName, ERole.ROLE_USER))
                                    .orElseThrow(() -> new RoleNotFoundException("Role not found: " + roleName));
                        } catch (RoleNotFoundException e) {
                            throw new RuntimeException(e);
                        }
                    })
                    .collect(Collectors.toSet());
        } // End of null check for getRole()

        user.setRoles(roles);
        return userRepository.save(user);
    }
}
