import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

Enzyme.configure({ adapter: new Adapter() });

describe("<TodoForm />", () => {
    it("renders", () => {
        const wrapper = shallow(<TodoForm />);
        expect(wrapper.exists()).toBe(true);
    });
    it("renders input", () => {
        const wrapper = shallow(<TodoForm />);
        expect(wrapper.find("form").exists()).toBe(true);
    });


    it("user text is echoed", () => {
        const wrapper = shallow(<TodoForm addTodo={() => { }} />);
        const input = wrapper.find("input");
        const testValue = "simulated test value";
        input.simulate("change", {
            target: { value: testValue }
        });
        expect(input.props().value).toEqual("simulated test value");
    });

    it("submit event is cancelled", () => {
        // on submit submit the value
        // it should create new item under list - len = 1
        // also data should have changed
        const wrapper = shallow(<TodoForm />);
        let prevented = false;
        wrapper.find("form").simulate("submit", {
            preventDefault: () => {
                prevented = true;
            }
        });
        expect(prevented).toBe(true);
    });
});