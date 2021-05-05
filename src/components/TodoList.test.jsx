import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TodoList from "../TodoList";
import TodoForm from "../TodoForm";

Enzyme.configure({ adapter: new Adapter() });

describe("ToDo List Component", () => {
    it("renders", () => {
        const wrapper = shallow(<TodoList />);
        expect(wrapper.exists()).toBe(true);
    });

    // it("has new todo component", () => {
    //     const wrapper = mount(<TodoList />);
    //     expect(wrapper.find(""))
    // })
});