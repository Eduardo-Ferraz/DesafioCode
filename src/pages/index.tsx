import { ChangeEvent, useState, KeyboardEvent } from "react";

import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Flex,
  Text,
  Image,
  HStack,
  VStack,
  Input,
  StackDivider,
  CheckboxGroup,
  Button,
  SimpleGrid,
  Circle,
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
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [tasksLeft, setTasksLeft] = useState<number>(0);
  const [list, setList] = useState<number>(0);

  function handleAddTask() {
    if (task === "") return;
    const newTask: ITask = {
      text: task,
      completed: false,
      id: new Date().getTime(),
    };
    setTasks((prevState) => [...prevState, newTask]);
    setTasksLeft(tasksLeft + 1);
    setTask("");
  }

  function handleCheckItem(id: number, isChecked: boolean) {
    // A exclamação indica que certamente o objeto existe, porém, não é uma boa prática :/
    if (isChecked) {
      document.getElementById(id.toString())!.style.textDecoration =
        "line-through";
      setTasksLeft((prevState) => prevState - 1);
    } else {
      document.getElementById(id.toString())!.style.textDecoration = "none";
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

  function handleNewtaskInput(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  function handleEnterKey(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleAddTask();
    }
  }

  function clearCompleted() {
    setTasks((state) => {
      const newTasks = state.filter((item) => item.completed === false);

      setTasksLeft(() => newTasks.length);
      return newTasks;
    });
  }

  function removeItem(id: number) {
    // Closure
    setTasks((state) => {
      const newTasks = state.filter((item) => item.id !== id);
      return newTasks;
    });
    setTasksLeft((prevState) => prevState - 1);
  }

  return (
    <>
      <Flex
        bg="dark.VDBlue"
        bgImage="/images/bg-desktop-dark.jpg"
        bgPosition="top"
        bgRepeat="no-repeat"
        w="100%"
        h="100vh"
        justifyContent="center"
        paddingTop="5rem"
      >
        <Flex direction="column" w="70%" alignItems="center">
          {/* Header */}
          <Flex w="50%" justifyContent="space-between" alignItems="center">
            <Text fontSize="36px" as="b" color="dark.LGrayishBlue">
              T O D O
            </Text>
            <Image boxSize="1.6rem" src="/icon-sun.svg" alt="icone de sol" />
          </Flex>

          {/* Buttom input */}
          <HStack
            marginTop="2rem"
            px="4"
            py="2"
            width="50%"
            spacing="6"
            bg="dark.VDDesaturatedBlue"
            borderRadius="4px"
          >
            {/* <img src="/images/icon-check.svg" alt="Icone Check" /> */}
            <Circle
              borderColor="colors.CheckBackground"
              borderStyle="solid"
              borderWidth="1px"
            >
              <CheckCircleIcon boxSize="1.3rem" visibility="hidden" />
            </Circle>
            <Input
              color="light.LGrayishBlue"
              bg="dark.VDDesaturatedBlue"
              placeholder="Create a new todo..."
              onChange={(e) => handleNewtaskInput(e)}
              onKeyDown={(e) => handleEnterKey(e)}
              value={task}
              focusBorderColor="dark.VDDesaturatedBlue"
              border="none"
            />
            {/**
             * Coloquei o displey none no botão pois a lógica de adicionar tarefa está nele,
             * Mas não há botão no design
             */}
            <Button
              type="submit"
              onClick={() => handleAddTask()}
              disabled={task === ""}
              display="none"
            >
              Add
            </Button>
          </HStack>

          {/* Items list */}
          <VStack
            className="TasksArea"
            bg="dark.VDDesaturatedBlue"
            w="50%"
            borderRadius="4px"
            marginTop="1.5rem"
          >
            <Flex className="Tasks" w="100%">
              <CheckboxGroup colorScheme="blackAlpha">
                <VStack
                  w="100%"
                  divider={<StackDivider borderColor="dark.DGrayishBlue" />}
                  spacing="0"
                >
                  {tasksInList(list).map((item) => (
                    <Item
                      text={item.text}
                      onChange={(event) =>
                        handleCheckItem(item.id, event.target.checked)
                      }
                      isChecked={item.completed}
                      id={`${item.id}`}
                      // eslint-disable-next-line react/jsx-no-bind
                      removeItem={removeItem}
                    />
                  ))}
                </VStack>
              </CheckboxGroup>
            </Flex>

            {/* Footer */}
            <Flex
              justifyContent="space-between"
              w="100%"
              px="10px"
              marginTop="1px"
              borderColor="dark.DGrayishBlue"
              borderStyle="solid"
              borderTopWidth="1px"
            >
              <Flex
                color="dark.VDGrayishBlue"
                justifyContent="center"
                alignItems="center"
              >
                {`${tasksLeft} items left`}
              </Flex>
              <SimpleGrid columns={3}>
                <Button
                  onClick={() => setList(0)}
                  variant="unstyled"
                  color={list === 0 ? "BrightBlue" : "light.LGrayishBlue"}
                >
                  All
                </Button>
                <Button
                  onClick={() => setList(1)}
                  variant="unstyled"
                  color={list === 1 ? "BrightBlue" : "light.LGrayishBlue"}
                >
                  Active
                </Button>
                <Button
                  onClick={() => setList(2)}
                  variant="unstyled"
                  color={list === 2 ? "BrightBlue" : "light.LGrayishBlue"}
                >
                  Completed
                </Button>
              </SimpleGrid>
              <Button
                variant="unstyled"
                color="light.LGrayishBlue"
                onClick={() => clearCompleted()}
              >
                Clear Completed
              </Button>
            </Flex>
          </VStack>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
