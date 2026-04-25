package com.learning.ai_platform.repository;

import com.learning.ai_platform.model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizRepository extends JpaRepository<Quiz, Long> {
}