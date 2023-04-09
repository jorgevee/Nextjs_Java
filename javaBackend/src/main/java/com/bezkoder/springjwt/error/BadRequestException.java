package com.bezkoder.springjwt.error;

public class BadRequestException extends RuntimeException {
  public BadRequestException(String message) {
    super(message);
  }

  public class RoleNotFoundException extends RuntimeException {
    public RoleNotFoundException(String message) {
      super(message);
    }
  }
}
