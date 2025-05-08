package com.project.AldebaranMovie.models;

public class LoginResponse {
    private String token;
    private long expiresIn;

    private String getToken() {
        return token;
    }

    public long getExpiresIn() {
        return expiresIn;
    }

    public LoginResponse setExpiresIn(long expiresIn) {
        this.expiresIn = expiresIn;
        return this;
    }

    public LoginResponse setToken(String token) {
        this.token = token;
        return this;
    }
}
