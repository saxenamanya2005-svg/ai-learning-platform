package com.learning.ai_platform.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Course {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String title;
    private String description;
}