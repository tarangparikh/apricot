package com.apricot.api.category;


import com.apricot.core.business.repository.category.CategoryRepository;
import com.apricot.core.business.repository.units.UnitRepository;
import com.apricot.core.model.category.Category;
import com.apricot.core.model.units.Unit;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/category")
public class CategoryApi {
    private final CategoryRepository categoryRepository;
    public CategoryApi(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @GetMapping("/")
    public List<Category> getAll() {
        return categoryRepository.findAll();
    }

    @GetMapping("/{company_id}")
    public List<Category> getByCompany_Id(@PathVariable Long company_id) {
        return categoryRepository.findAllByCompany_Id(company_id);
    }

    @PostMapping("/post")
    public Category addCategory(@RequestBody Category category) {
        return categoryRepository.save(category);
    }

    @DeleteMapping("/delete/{category_id}")
    void deleteCategory(@PathVariable Long category_id) {
        categoryRepository.deleteById(category_id);
    }
}
