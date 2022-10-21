package com.cg.medicalapp;


import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
 
/*
 * To create custom security configuration class you have to extend WebSecurityConfigurerAdapter class and 
 * annotate it with  @EnableWebSecurity annotation
 * @EnableWebSecurity  enables web security support provided by Spring Security.
 * WebSecurityConfigurerAdapter class provides methods which have to be overridden to implement custom security requirements. 
 */
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{

    //for authentication
    /*After creating custom security configuration class we have to specify data source where user credentials are stored for authentication. 
     * For this we have to override, 
     * protected void configure(AuthenticationManagerBuilder auth) method of WebSecurityConfigurerAdapter class in our SecurityConfig class.
     **/
    @Override
    public void configure(AuthenticationManagerBuilder auth)throws Exception{
        auth.inMemoryAuthentication()
        .withUser("user")
        .password(passwordEncoder().encode("user"))
        .roles("USER")
        .and()
        .withUser("admin")
        .password(passwordEncoder().encode("admin"))
        .roles("ADMIN");
    }

    /*
     * In Spring Security 5.x onwards the password has to be encrypted before being stored. 
     * It does not allow plain text password without specifying the password encryption algorithm. 
     * So we have to specify the password encryption algorithm before being stored.
     * encode() method is used to encode the password.
     */
    @Bean
    PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
 
    
    //For authorization
    //Using object of HTTPSecurity we can define how to handle security at the web level.
    @Override
    protected void configure(HttpSecurity http) throws Exception {    
           http
             .authorizeRequests()
              .antMatchers(HttpMethod.GET,"/medical/*")
              .hasRole("USER")
            .anyRequest()
            .authenticated()
            .and()
            .httpBasic();
           http.csrf().disable();    //The Spring security by default enables CSRF(Cross Site Request Forgery) protection. 
                                       //Because of this we can access only GET endpoints. 
                                       //For accessing PUT, POST and DELETE endpoints, we have to disable the CSRF protection.
        }
}
 
//In above code
/*
 * The URI to be protected is mentioned using antMatchers() method. 
 * In URI "/api/booking/**", ** means any value after /api/banking. 
the hasRole() method specifies the role of the user.
anyRequest().authenticated() means any request mapped to this URI will be authenticated.
httpBasic() specifies that HTTP basic authentication has to be used.
*/
//The users with role USER can access only the GET endpoint with URI "/api/booking/**". 
