import React, { useState } from "react";
import { Button, Container, Heading, Textarea } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [touched, setTouched] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const onBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeSubject = (e) => {
    setSubject(e.target.value);
  };

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };
  const onSubmit = async () => {
    setIsLoading(true);
  };

  return (
    <Container maxW={"450px"} mt={12}>
      <Heading>Home</Heading>

      <FormControl isRequired isInvalid={touched.name && !name} mb={5}>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          errorBorderColor="red.300"
          value={name}
          onChange={handleChangeName}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={touched.email && !email} mb={5}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={touched.subject && !subject} mb={5}>
        <FormLabel>Subject</FormLabel>
        <Input
          type="text"
          name="subject"
          value={subject}
          onChange={handleChangeSubject}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={touched.message && !message} mb={5}>
        <FormLabel>Message</FormLabel>
        <Textarea
          type="text"
          name="message"
          value={message}
          onChange={handleChangeMessage}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      <Button
        variant="outline"
        colorScheme="blue"
        isLoading={isLoading}
        isDisabled={!name || !email || !subject || !message}
        onClick={onSubmit}
      >
        Submit
      </Button>
    </Container>
  );
};

export default Home;
