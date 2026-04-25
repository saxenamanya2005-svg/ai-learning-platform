package com.learning.ai_platform.controller;

import com.learning.ai_platform.model.Quiz;
import com.learning.ai_platform.repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class QuizController {

    @Autowired
    private QuizRepository quizRepository;

    @GetMapping("/quiz")
    public List<Quiz> getQuiz() {
        return quizRepository.findAll();
    }

    @PostMapping("/quiz/submit")
    public String submitQuiz(@RequestBody Map<String, String> answers) {
        int score = 0;
        List<Quiz> allQuestions = quizRepository.findAll();
        for (Quiz q : allQuestions) {
            String submitted = answers.get(String.valueOf(q.getId()));
            if (q.getCorrectAnswer().equals(submitted)) score++;
        }
        return "Your score: " + score + "/" + allQuestions.size();
    }
}