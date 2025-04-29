/**
 * Cloud Fund Design Thinking Project
 * Main JavaScript File
 * 
 * This file handles all interactive elements of the Cloud Fund website including:
 * - Navigation functionality (mobile menu, smooth scrolling)
 * - Scroll-based animations and effects
 * - Form validation and submission
 * - Intersection Observer animations for elements
 * - Dynamic visual enhancements
 */

document.addEventListener('DOMContentLoaded', function() {
    /**
     * DOWNLOAD REPORT FUNCTIONALITY
     * Handles the generation and download of the report PDF
     */
    const downloadReportBtn = document.querySelector('.contact-info .btn-outline');
    
    if (downloadReportBtn) {
        downloadReportBtn.addEventListener('click', function(e) {
            e.preventDefault();
            generateAndDownloadReport();
        });
    }
    
    // Function to generate and download the report
    function generateAndDownloadReport() {
        // Create the report content
        const reportContent = `
            <html>
            <head>
                <title>Cloud Fund Design Thinking Project Report</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        color: #333;
                        max-width: 800px;
                        margin: 0 auto;
                        padding: 20px;
                    }
                    h1 {
                        color: #0a2342;
                        border-bottom: 3px solid #4ce0b3;
                        padding-bottom: 10px;
                    }
                    h2 {
                        color: #0a2342;
                        margin-top: 30px;
                    }
                    .stats {
                        display: flex;
                        justify-content: space-between;
                        margin: 30px 0;
                        text-align: center;
                    }
                    .stat-item {
                        flex: 1;
                        padding: 15px;
                        background-color: #f5f5f7;
                        border-radius: 8px;
                        margin: 0 10px;
                    }
                    .stat-number {
                        font-size: 2rem;
                        font-weight: bold;
                        color: #0a2342;
                    }
                    .footer {
                        margin-top: 50px;
                        border-top: 1px solid #ddd;
                        padding-top: 20px;
                        text-align: center;
                        font-size: 0.9rem;
                    }
                </style>
            </head>
            <body>
                <h1>Cloud Fund Design Thinking Project Report</h1>
                <p>This report summarizes the design thinking approach used to transform Cloud Fund's fragmented fraud prevention process into a cohesive, user-centered, and adaptive system.</p>
                
                <h2>Project Overview</h2>
                <p>Cloud Fund's fraud prevention efforts faced challenges beyond technology: disconnected workflows, siloed systems, and reactive approaches that created friction for legitimate users while still leaving vulnerabilities for bad actors.</p>
                <p>We applied design thinking to unearth meaningful behavioral, operational, and systemic insights to reshape fraud defense strategies and systems.</p>
                
                <h2>Key Metrics</h2>
                <div class="stats">
                    <div class="stat-item">
                        <div class="stat-number">30%</div>
                        <p>Reduction in false positives</p>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">45%</div>
                        <p>Increase in verification completion</p>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">25%</div>
                        <p>Faster fraud detection time</p>
                    </div>
                </div>
                
                <h2>Design Thinking Process</h2>
                <p><strong>Empathize:</strong> We conducted field interviews with users, fraud victims, and support teams to understand the emotional and practical impacts of both fraud incidents and prevention measures.</p>
                <p><strong>Define:</strong> We synthesized our research into journey maps and problem statements that highlighted the key pain points and opportunities for improvement.</p>
                <p><strong>Ideate:</strong> Through co-creation workshops with fraud analysts, designers, and other stakeholders, we generated a wide range of potential solutions.</p>
                <p><strong>Prototype:</strong> We created wireframes and interactive prototypes of user flows, system alerts, and internal dashboards to visualize our solutions.</p>
                <p><strong>Test:</strong> We established feedback loops with operations teams and end-users to validate our solutions and iterate based on real-world usage.</p>
                
                <h2>Key Insights</h2>
                <ul>
                    <li><strong>Misaligned KPIs:</strong> Fraud operations teams were measured on fraud prevention rates, while UX teams were measured on conversion rates—creating an inherent conflict in goals and approaches.</li>
                    <li><strong>Verification Abandonment:</strong> Users were abandoning identity verification processes due to confusing flows and lack of context about why additional security was needed.</li>
                    <li><strong>Alert Fatigue:</strong> Analysts were overwhelmed by siloed alerts across multiple platforms, leading to missed signals and delayed responses to potential fraud.</li>
                    <li><strong>Trust Signals:</strong> Users were more willing to complete security steps when they understood the purpose and saw visual confirmation of security measures.</li>
                </ul>
                
                <h2>Solutions Implemented</h2>
                <ul>
                    <li><strong>UX Enhancements:</strong> Guided ID verification, fraud education, and contextual prompts</li>
                    <li><strong>Backend Integration:</strong> Unified alert system, fraud pattern visualizer, and API integration layer</li>
                    <li><strong>AI & Machine Learning:</strong> Adaptive risk scoring, biometric authentication, and anomaly detection</li>
                    <li><strong>Operational Dashboards:</strong> Unified fraud review, cross-team KPI tracker, and user journey monitor</li>
                </ul>
                
                <div class="footer">
                    <p>© 2023 Cloud Fund. All rights reserved.</p>
                    <p>For more information, contact us at contact@cloudfund.com</p>
                </div>
            </body>
            </html>
        `;
        
        // Create a Blob containing the report content
        const blob = new Blob([reportContent], { type: 'text/html' });
        
        // Create a URL for the Blob
        const url = URL.createObjectURL(blob);
        
        // Create a temporary link element to trigger the download
        const link = document.createElement('a');
        link.href = url;
        link.download = 'CloudFund_DesignThinking_Report.html';
        
        // Append the link to the body, click it, and remove it
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Release the URL object
        URL.revokeObjectURL(url);
    }

    /**
     * NAVIGATION FUNCTIONALITY
     * Handles mobile navigation toggle, smooth scrolling, and active state management
     */
    
    // Mobile Navigation Toggle - Shows/hides the mobile menu and changes the icon
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', function() {
            // Toggle the active class to show/hide the menu
            navLinks.classList.toggle('active');
            
            // Change icon based on menu state (hamburger ↔ close)
            const icon = this.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Close mobile menu when clicking a navigation link
    const navLinkItems = document.querySelectorAll('.nav-links a');
    
    navLinkItems.forEach(link => {
        link.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                // Hide the mobile menu
                navLinks.classList.remove('active');
                
                // Reset the toggle icon back to hamburger
                const icon = mobileNavToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
    
    // Smooth scrolling for navigation links - Creates a smooth animation when clicking nav links
    navLinkItems.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Scroll to the target section with a smooth animation
            window.scrollTo({
                top: targetSection.offsetTop - 60, // Adjust for header height
                behavior: 'smooth'
            });
        });
    });
    
    /**
     * SCROLL EFFECTS
     * Handles effects that occur on page scroll
     */
    
    // Header scroll effect - Changes header appearance when scrolling down
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        // Add 'scrolled' class when page is scrolled down
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Highlight active navigation section on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let current = '';
        
        // Determine which section is currently in view
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        // Update the active class on navigation links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    /**
     * FORM VALIDATION
     * Handles contact form validation and submission
     */
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        // Get all form input fields
        const formInputs = contactForm.querySelectorAll('input, textarea');
        
        formInputs.forEach(input => {
            // Validate input when user leaves the field
            input.addEventListener('blur', function() {
                validateInput(this);
            });
            
            // Remove error styling when user focuses on the field again
            input.addEventListener('focus', function() {
                this.classList.remove('error');
                const errorMessage = this.parentElement.querySelector('.error-message');
                if (errorMessage) {
                    errorMessage.remove();
                }
            });
        });
        
        // Form submission handler
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate all inputs before submission
            let isValid = true;
            
            formInputs.forEach(input => {
                if (!validateInput(input)) {
                    isValid = false;
                }
            });
            
            // Don't proceed if validation fails
            if (!isValid) {
                return;
            }
            
            // Collect form data
            const formData = new FormData(this);
            let formValues = {};
            
            for (let [key, value] of formData.entries()) {
                formValues[key] = value;
            }
            
            console.log('Form submitted with values:', formValues);
            
            // Save contact information to localStorage
            saveContactToLocalStorage(formValues);
            
            // Show animated success message with option to view saved contacts
            this.innerHTML = `
                <div class="success-message">
                    <i class="fas fa-check-circle"></i>
                    <h3>Thank you for your message!</h3>
                    <p>We'll get back to you as soon as possible.</p>
                    <button class="btn btn-secondary view-contacts-btn">View Saved Contacts</button>
                </div>
            `;
            
            // Add animation class to the success message
            setTimeout(() => {
                document.querySelector('.success-message').classList.add('animate');
                
                // Add event listener to the view contacts button
                const viewContactsBtn = document.querySelector('.view-contacts-btn');
                if (viewContactsBtn) {
                    viewContactsBtn.addEventListener('click', showSavedContacts);
                }
            }, 100);
        });
        
        // Function to save contact information to localStorage
        function saveContactToLocalStorage(contact) {
            // Get existing contacts from localStorage or initialize empty array
            let contacts = JSON.parse(localStorage.getItem('cloudFundContacts')) || [];
            
            // Add timestamp to the contact
            contact.timestamp = new Date().toISOString();
            
            // Add the new contact to the array
            contacts.push(contact);
            
            // Save the updated contacts array back to localStorage
            localStorage.setItem('cloudFundContacts', JSON.stringify(contacts));
        }
        
        // Function to show saved contacts in a modal
        function showSavedContacts() {
            // Get contacts from localStorage
            const contacts = JSON.parse(localStorage.getItem('cloudFundContacts')) || [];
            
            // Create modal HTML
            const modalHTML = `
                <div class="contacts-modal">
                    <div class="contacts-modal-content">
                        <div class="contacts-modal-header">
                            <h3>Saved Contacts</h3>
                            <button class="close-modal-btn"><i class="fas fa-times"></i></button>
                        </div>
                        <div class="contacts-modal-body">
                            ${contacts.length === 0 ? '<p>No contacts saved yet.</p>' : ''}
                            <div class="contacts-list">
                                ${contacts.map((contact, index) => `
                                    <div class="contact-item">
                                        <h4>${contact.name}</h4>
                                        <p><strong>Email:</strong> ${contact.email}</p>
                                        <p><strong>Company:</strong> ${contact.company || 'N/A'}</p>
                                        <p><strong>Message:</strong> ${contact.message}</p>
                                        <p><small>Submitted: ${new Date(contact.timestamp).toLocaleString()}</small></p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div class="contacts-modal-footer">
                            <button class="btn export-contacts-btn">Export as CSV</button>
                            <button class="btn btn-outline clear-contacts-btn">Clear All</button>
                        </div>
                    </div>
                </div>
            `;
            
            // Add modal to the page
            const modalContainer = document.createElement('div');
            modalContainer.innerHTML = modalHTML;
            document.body.appendChild(modalContainer);
            
            // Add event listeners for modal buttons
            const closeBtn = document.querySelector('.close-modal-btn');
            const exportBtn = document.querySelector('.export-contacts-btn');
            const clearBtn = document.querySelector('.clear-contacts-btn');
            const modal = document.querySelector('.contacts-modal');
            
            closeBtn.addEventListener('click', () => {
                document.body.removeChild(modalContainer);
            });
            
            exportBtn.addEventListener('click', exportContactsAsCSV);
            
            clearBtn.addEventListener('click', () => {
                if (confirm('Are you sure you want to clear all saved contacts?')) {
                    localStorage.removeItem('cloudFundContacts');
                    document.body.removeChild(modalContainer);
                }
            });
            
            // Close modal when clicking outside of it
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    document.body.removeChild(modalContainer);
                }
            });
        }
        
        // Function to export contacts as CSV
        function exportContactsAsCSV() {
            // Get contacts from localStorage
            const contacts = JSON.parse(localStorage.getItem('cloudFundContacts')) || [];
            
            if (contacts.length === 0) {
                alert('No contacts to export.');
                return;
            }
            
            // Define CSV headers based on the first contact's keys
            const headers = Object.keys(contacts[0]).filter(key => key !== 'timestamp');
            headers.push('submitted_date'); // Add formatted date
            
            // Create CSV content
            let csvContent = headers.join(',') + '\n';
            
            // Add each contact as a row
            contacts.forEach(contact => {
                const row = headers.map(header => {
                    if (header === 'submitted_date') {
                        return new Date(contact.timestamp).toLocaleString();
                    }
                    
                    // Handle commas and quotes in the content
                    let value = contact[header] || '';
                    if (value.includes(',') || value.includes('"') || value.includes('\n')) {
                        value = '"' + value.replace(/"/g, '""') + '"';
                    }
                    return value;
                });
                
                csvContent += row.join(',') + '\n';
            });
            
            // Create a Blob containing the CSV data
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            
            // Create a URL for the Blob
            const url = URL.createObjectURL(blob);
            
            // Create a temporary link element to trigger the download
            const link = document.createElement('a');
            link.href = url;
            link.download = 'CloudFund_Contacts.csv';
            
            // Append the link to the body, click it, and remove it
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Release the URL object
            URL.revokeObjectURL(url);
        }
        
    }
    
    /**
     * FORM VALIDATION HELPER FUNCTIONS
     */
    
    // Validates individual form inputs
    function validateInput(input) {
        const value = input.value.trim();
        const errorMessage = input.parentElement.querySelector('.error-message');
        
        // Remove existing error message
        if (errorMessage) {
            errorMessage.remove();
        }
        
        // Check if required field is empty
        if (value === '' && input.hasAttribute('required')) {
            showError(input, 'This field is required');
            return false;
        }
        
        // Check email format using regex
        if (input.type === 'email' && value !== '') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showError(input, 'Please enter a valid email address');
                return false;
            }
        }
        
        // Input is valid
        input.classList.remove('error');
        return true;
    }
    
    // Displays error message for invalid inputs
    function showError(input, message) {
        input.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        input.parentElement.appendChild(errorDiv);
        
        // Add subtle shake animation to indicate error
        input.classList.add('shake');
        setTimeout(() => {
            input.classList.remove('shake');
        }, 500);
    }
    
    /**
     * SCROLL ANIMATIONS
     * Uses Intersection Observer API to animate elements when they come into view
     */
    
    // Configuration for the Intersection Observer
    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin
        threshold: 0.1 // Trigger when at least 10% of the element is visible
    };
    
    // Create the observer instance
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when element comes into view
                entry.target.classList.add('animate');
                // Stop observing once animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe timeline items with staggered animation delay
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        // Add staggered delay based on index
        item.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(item);
    });
    
    // Observe cards and other elements with staggered animations
    document.querySelectorAll('.card, .insight-card, .metric-card, .stat-item').forEach((item, index) => {
        // Add staggered delay based on index within parent
        const siblings = Array.from(item.parentElement.children);
        const indexInParent = siblings.indexOf(item);
        item.style.transitionDelay = `${indexInParent * 0.2}s`;
        observer.observe(item);
    });
    
    // Solution cards with special animation
    document.querySelectorAll('.solution-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(card);
        
        // Add hover animation for solution icons
        const icon = card.querySelector('.solution-icon');
        if (icon) {
            card.addEventListener('mouseenter', () => {
                icon.classList.add('pulse');
            });
            card.addEventListener('mouseleave', () => {
                icon.classList.remove('pulse');
            });
        }
    });
    
    /**
     * HERO SECTION ANIMATIONS
     * Enhances the hero section with dynamic visual elements
     */
    
    // Add floating animation to security icons in hero section
    const securityIcons = document.querySelectorAll('.security-icon');
    
    securityIcons.forEach(icon => {
        // Set random animation duration between 25-45s
        const duration = Math.random() * 20 + 25;
        // Set random delay between 0-15s
        const delay = Math.random() * 15;
        
        icon.style.animationDuration = `${duration}s`;
        icon.style.animationDelay = `${delay}s`;
    });
    
    // Add parallax effect to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            // Move background at a different rate than foreground
            hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        });
    }
    
    /**
     * ADDITIONAL ANIMATIONS AND EFFECTS
     */
    
    // Add counter animation to statistics and metrics
    function animateCounter(element, target, duration = 3500) {
        let start = 0;
        const increment = target / (duration / 16); // Update every 16ms (60fps)
        
        function updateCounter() {
            start += increment;
            if (start >= target) {
                element.textContent = target;
                if (element.classList.contains('metric')) {
                    element.textContent = target + '%';
                }
                if (element.classList.contains('stat-number') && !element.textContent.includes('%')) {
                    element.textContent = target + '%';
                }
            } else {
                element.textContent = Math.floor(start);
                if (element.classList.contains('metric')) {
                    element.textContent = Math.floor(start) + '%';
                }
                if (element.classList.contains('stat-number') && !element.textContent.includes('%')) {
                    element.textContent = Math.floor(start) + '%';
                }
                requestAnimationFrame(updateCounter);
            }
        }
        
        updateCounter();
    }
    
    // Create observer for counter elements
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                let target;
                
                // Extract the number from the element's text
                if (element.classList.contains('metric')) {
                    target = parseInt(element.textContent);
                } else if (element.classList.contains('stat-number')) {
                    if (element.textContent.includes('%')) {
                        target = parseInt(element.textContent);
                    } else if (element.textContent.includes('h')) {
                        // Handle hour format (e.g., "3.5h")
                        target = parseFloat(element.textContent) * 10;
                        element.textContent = '0';
                        
                        // Special animation for hour format
                        let start = 0;
                        const increment = target / 200;
                        const interval = setInterval(() => {
                            start += increment;
                            if (start >= target) {
                                element.textContent = (target / 10) + 'h';
                                clearInterval(interval);
                            } else {
                                element.textContent = (start / 10).toFixed(1) + 'h';
                            }
                        }, 25);
                        
                        counterObserver.unobserve(element);
                        return;
                    }
                }
                
                if (target) {
                    element.textContent = '0';
                    animateCounter(element, target);
                }
                
                counterObserver.unobserve(element);
            }
        });
    }, { threshold: 0.5 });
    
    // Observe all counter elements
    document.querySelectorAll('.metric, .stat-number').forEach(counter => {
        counterObserver.observe(counter);
    });
    
    // Hero headline is now displayed without typing effect
    const heroHeadline = document.querySelector('.hero h1');
    if (heroHeadline) {
        // Ensure the headline is visible immediately
        heroHeadline.style.opacity = '1';
    }
    
    // Add pulse animation to logo dot
    const logoDot = document.querySelector('.logo::before');
    if (logoDot) {
        setInterval(() => {
            logoDot.classList.add('pulse');
            setTimeout(() => {
                logoDot.classList.remove('pulse');
            }, 1000);
        }, 3000);
    }
});