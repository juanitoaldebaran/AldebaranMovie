package com.project.AldebaranMovie.exception;

public class UserHasAlreadyExist extends RuntimeException{
    public UserHasAlreadyExist(String message) {
        super(message);
    }
}
