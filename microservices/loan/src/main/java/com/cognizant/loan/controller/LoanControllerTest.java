package com.cognizant.loan.controller;

import com.cognizant.loan.model.Loan;
import com.cognizant.loan.service.LoanService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(LoanController.class)
public class LoanControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private LoanService loanService;

    @Test
    public void testGetLoanDetails() throws Exception {
        when(loanService.getLoanDetails()).thenReturn(Arrays.asList(
            new Loan("LN001", "Home Loan", 500000, 6.5),
            new Loan("LN002", "Car Loan", 300000, 7.0)
        ));

        mockMvc.perform(get("/loans"))
                .andExpect(status().isOk());
    }
}
