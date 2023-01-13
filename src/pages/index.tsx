import { useState } from "react";

import {
  Flex,
  Spacer,
  Text,
  Image,
  HStack,
  VStack,
  Input,
  StackDivider,
  CheckboxGroup,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

import Item from "../components/Item";

interface ItemProps {
  text: String;
}

interface ITask {
  text: String;
  completed: boolean;
  id: number;
}

const Home: NextPage = () => {
  const [task, setTask] = useState<String>("");
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [tasksLeft, setTasksLeft] = useState<number>(0);
  const [list, setList] = useState<number>(0);

  function handleAddTask() {
    const newTask: ITask = {
      text: task,
      completed: false,
      id: new Date().getTime(),
    };
    setTasks((prevState) => [...prevState, newTask]);
    setTasksLeft(tasksLeft + 1);
  }

  function handleChangeTask(id: number, isChecked: boolean) {
    if (isChecked) {
      setTasksLeft((prevState) => prevState - 1);
    } else {
      setTasksLeft((prevState) => prevState + 1);
    }

    const newTasks = tasks.map((item) => {
      if (item.id === id) {
        // eslint-disable-next-line no-param-reassign
        item.completed = isChecked;
      }
      return item;
    });

    setTasks(newTasks);
  }

  function tasksInList(op: number): ITask[] {
    switch (op) {
      case 1:
        return tasks.filter((item) => item.completed === false);
      case 2:
        return tasks.filter((item) => item.completed === true);
      default:
        return tasks;
    }
  }

  function clearCompleted() {
    setTasks(() => tasks.filter((item) => item.completed === false));
  }

  return (
    <>
      <Head>
        <title>ToDo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Image src="bg-desktop-dark.jpg" w="100%" />
      <Flex
        bg="dark.VDBlue"
        w="100%"
        h="100vh"
        justifyContent="center"
        alignItems="center"
        mt="-40vh"
      >
        <Flex direction="column" w="100%" alignItems="center">
          {/* Header */}
          <Flex py="20" width="50%" justifyContent="center">
            <Text fontSize="36px" as="b" color="white">
              T O D O
            </Text>
            <Spacer />
            <Image boxSize="32px" src="/icon-sun.svg" alt="icone de sol" />
          </Flex>

          {/* Buttom input */}
          <HStack
            my="4"
            px="4"
            py="2"
            width="50%"
            spacing="6"
            borderRadius="4"
            bg="dark.VDGrayishBlue2"
          >
            <img src="/icon-check.svg" alt="Icone Check" />
            <Input
              color="dark.LGrayishBlue"
              placeholder="Create a new todo..."
              onChange={(e) => setTask(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleAddTask();
                }
              }}
            />
            <Button type="submit" onClick={() => handleAddTask()}>
              Add
            </Button>
          </HStack>

          {/* Items list */}
          <Flex
            w="50%"
            direction="column"
            borderRadius="4"
            bg="dark.DGrayishBlue"
          >
            <Flex w="100%">
              <CheckboxGroup colorScheme="blackAlpha">
                <VStack w="100%" spacing="0">
                  {tasksInList(list).map((item) => (
                    <Item
                      text={item.text}
                      onChange={(event) =>
                        handleChangeTask(item.id, event.target.checked)
                      }
                      isChecked={item.completed}
                    />
                  ))}
                </VStack>
              </CheckboxGroup>
            </Flex>
            <Flex
              w="100%"
              p="10px"
              justifyContent="space-between"
              borderRadius="4"
              bg="dark.VDGrayishBlue2"
            >
              <Text color="white">
                Tasks left:
                {tasksLeft}
              </Text>
              <SimpleGrid columns={3}>
                <Button
                  onClick={() => setList(0)}
                  bg=""
                  color="white"
                  _hover={{
                    background: "dark.VDGrayishBlue",
                  }}
                >
                  All
                </Button>
                <Button
                  onClick={() => setList(1)}
                  bg=""
                  color="white"
                  _hover={{
                    background: "dark.VDGrayishBlue",
                  }}
                >
                  Active
                </Button>
                <Button
                  onClick={() => setList(2)}
                  bg=""
                  color="white"
                  _hover={{
                    background: "dark.VDGrayishBlue",
                  }}
                >
                  Completed
                </Button>
              </SimpleGrid>
              <Button
                onClick={() => clearCompleted()}
                bg=""
                color="white"
                _hover={{
                  background: "dark.VDGrayishBlue",
                }}
              >
                Clear Completed
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
