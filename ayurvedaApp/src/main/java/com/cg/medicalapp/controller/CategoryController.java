package com.cg.medicalapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cg.medicalapp.entity.Category;
import com.cg.medicalapp.exception.NoSuchCategoryException;
import com.cg.medicalapp.service.CategoryService;

@RestController
@RequestMapping("/category")
public class CategoryController {
	
	@Autowired
	CategoryService categoryService;
	
	@GetMapping("/showAll")
	public ResponseEntity<List<Category>> showAll(){
		return new ResponseEntity<>(categoryService.showAllCategory(), HttpStatus.OK);
	}
	
	@PostMapping("/add")
	public ResponseEntity<Category> addCategory(@RequestBody Category category){
		return new ResponseEntity<>(categoryService.addCategory(category),HttpStatus.CREATED);
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Category> updateCategory(@PathVariable("id") int id, @RequestParam("name") String name){
		try {
			return new ResponseEntity<>(categoryService.updateCategory(id, name), HttpStatus.OK);
		} catch (NoSuchCategoryException e) {
			System.out.println(e.getMessage());
		}
		return null;
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Category> deleteCategory(@PathVariable("id") int id){
		try {
			return new ResponseEntity<>(categoryService.deleteCategory(id), HttpStatus.OK);
		} catch (NoSuchCategoryException e) {
			System.out.println(e.getMessage());
		}
		return null;
	}
}

