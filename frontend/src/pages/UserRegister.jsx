import { Box, Container, Input, Stack } from "@chakra-ui/react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react';
import { Button } from "@chakra-ui/react";
import { useState } from "react";

const UserRegister = () => {
    const [input, setInput] = useState('');

    const handleInputChange = (e) => setInput(e.target.value);
  
    const isError = input === '';

    function handleClick() {
        if (!isError) {
            alert('User Registered with email: ' + input);
        } else {
            alert('Please enter your email.');
        }
    }

    return (
        <Container
            alignItems={"center"}
            fontSize={20}
            fontWeight={4}
        >
            <FormControl isInvalid={isError}>
                <FormLabel>Email</FormLabel>
                <Input type='email' value={input} onChange={handleInputChange} />
                {!isError ? (
                    <FormHelperText>
                        Enter the email you'd like to receive the newsletter on.
                    </FormHelperText>
                ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                )}
            </FormControl>
            <FormControl isRequired>
                <FormLabel>First name</FormLabel>
                <Input placeholder='First name' />
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type='password' />
                <FormHelperText>Write a secure password you can remember</FormHelperText>
            </FormControl>
            <Button onClick={handleClick} colorScheme="teal" mt={4}>
                Register
            </Button>
        </Container>
    );
};

export default UserRegister;
