import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TodoList from "./TodoList";
import { newMockItem, mockData } from "../mockData";
import { addTodo, removeTodo, toggleCompleted } from "../utils/todoOperationLogic";

Enzyme.configure({ adapter: new Adapter() });

describe("<TodoList />", () => {
    it("renders ul", () => {
        const wrapper = shallow(<TodoList />);
        expect(wrapper.exists()).toBe(true);
    });
    it("doesn't break without li", () => {
        const wrapper = shallow(<TodoList />);
        expect(wrapper.find("li")).toHaveLength(0);
    });
    it("addTodo", () => {
        const testResult = addTodo(mockData, newMockItem);
        const expectedResult = [...mockData, newMockItem];

        expect(testResult).toEqual(expectedResult);
    });
    it("removeTodo", () => {
        let i = 0;
        const testResult = removeTodo(mockData, i);
        const expectedResult = [...mockData].splice(i, 1);

        expect(testResult).toEqual(expectedResult);
    });
    it("toggleCompletion", () => {
        let i = 0;
        const testResult = toggleCompleted(mockData, i);
        let expectedResult = [...mockData];
        expectedResult[i].isCompleted = !expectedResult[i].isCompleted;

        expect(testResult).toEqual(expectedResult);
    });
    //render listItems on mockData
    //trigger add event -  should render an item, len = 1
});