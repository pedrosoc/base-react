import React from "react";
import { shallow } from "enzyme";

import { Home } from "../";

it("snapshot test for home component", () => {
	const home = shallow(<Home />);
	expect(home.getElement()).toMatchSnapshot();
});
