package com.bezkoder.springjwt.security.jwt;

import com.bezkoder.springjwt.security.services.UserDetailsImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;
import io.jsonwebtoken.*;

@Component
public class JwtUtils {
  private static final Logger logger = LoggerFactory.getLogger(JwtUtils.class);

  @Value("${saas.app.jwtSecret}")
  private String secret;

  @Value("${saas.app.jwtExpirationMs}")
  private int expiration;

  private Claims generateClaims(Authentication authentication) {
    UserDetailsImpl userPrincipal = (UserDetailsImpl) authentication.getPrincipal();
    return Jwts.claims().setSubject(userPrincipal.getUsername())
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + expiration));
  }

  private String signClaims(Claims claims) {
    return Jwts.builder()
            .setClaims(claims)
            .signWith(SignatureAlgorithm.HS512, secret)
            .compact();
  }

  public String generateJwtToken(Authentication authentication) {
    Claims claims = generateClaims(authentication);
    return signClaims(claims);
  }

  private boolean isValidJwtToken(String token) {
    try {
      Jwts.parser().setSigningKey(secret).parseClaimsJws(token);
      return true;
    } catch (JwtException | IllegalArgumentException e) {
      logger.error("JWT validation failed: {}", e.getMessage());
      return false;
    }
  }

  public boolean validateJwtToken(String token) {
    return isValidJwtToken(token);
  }

  private String getClaim(String token, String claimName) {
    return Jwts.parser()
            .setSigningKey(secret)
            .parseClaimsJws(token)
            .getBody()
            .get(claimName, String.class);
  }

  public String getUsernameFromJwtToken(String token) {
    return getClaim(token, "sub");
  }

  public String getUserNameFromJwtToken(String jwt) {
    return getClaim(jwt, "sub");
  }
}
