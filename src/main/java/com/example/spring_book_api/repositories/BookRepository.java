package com.example.spring_book_api.repositories;

import com.example.spring_book_api.models.Book;
import org.springframework.data.repository.CrudRepository;

public interface BookRepository extends CrudRepository<Book, Long> {
}
