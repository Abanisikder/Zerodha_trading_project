import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import Hero from "../landing_page/home/Hero";


describe('Hero component', () => {
    test('render hero image', () => {
        render(<Hero />);
        
       
        const heroImage = screen.getByAltText('Hero img');
        
       
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
    });
   test('renders the "SignUp Now" button correctly', () => {
    render(<Hero />);
    
    // ভ্যারিয়েবলের নাম দিলাম signupButton
    const signupButton = screen.getByRole('button', { name: /signup now/i });
    
    // এখন সব জায়গায় signupButton নামেই ব্যবহার করতে হবে
    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass('btn-primary'); 
});
});