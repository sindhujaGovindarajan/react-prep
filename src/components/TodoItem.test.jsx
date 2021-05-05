import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TodoItem from "./TodoItem";

Enzyme.configure({ adapter: new Adapter() });

describe("<TodoItem />", () => {
    it("renders", () => {
        const wrapper = shallow(<TodoItem />);
        expect(wrapper.exists()).toBe(true);
    });
});