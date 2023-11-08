package com.KLU.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.KLU.entity.Course;
import com.KLU.model.CourseManager;

@RestController
@RequestMapping("/course")
public class CourseController {


  @Autowired
  CourseManager M;
  
  @PostMapping("/save")
  public String save(@RequestBody Course C)
  {
    return M.saveData(C);
  }
  
  @PutMapping("/update/{id}")
  public String update(@PathVariable("id") Long id,@RequestBody Course C)
  {
    return M.updateData(id, C);
  }
  
  @DeleteMapping("/delete/{id}")
  public String delete(@PathVariable("id") Long id)
  {
    return M.deleteData(id);
  }
  
  @GetMapping("/read")
  public String read()
  {
    return M.getData().toString();
  }
}