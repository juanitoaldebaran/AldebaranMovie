package com.project.AldebaranMovie.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(UserHasAlreadyExist.class)
    public ResponseEntity<Map<String, Object>> handleUserHasAlreadyExist(UserHasAlreadyExist e) {
        Map<String, Object> body = new HashMap<>();
        body.put("Timestamp", LocalDateTime.now());
        body.put("Status", HttpStatus.NOT_FOUND.value());
        body.put("Error", "User has already exist");
        body.put("Message", e.getMessage());

        return new ResponseEntity<>(body, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(UserNotFound.class)
    public ResponseEntity<Map<String, Object>> handleUserNotFound(UserNotFound e) {
        Map<String, Object> body = new HashMap<>();
        body.put("Timestamp", LocalDateTime.now());
        body.put("Status", HttpStatus.NOT_FOUND.value());
        body.put("Error", "User not found");
        body.put("Message", e.getMessage());

        return new ResponseEntity<>(body, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, Object>> handleGlobalException(Exception e) {
        Map<String, Object> body = new HashMap<>();
        body.put("Timestamp", LocalDateTime.now());
        body.put("Status", HttpStatus.NOT_FOUND.value());
        body.put("Error", "Internal Server Error");
        body.put("Message", e.getMessage());

        return new ResponseEntity<>(body, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
