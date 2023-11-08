package com.KLU.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.KLU.entity.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {

}