import React from "react";
import { shallow, mount } from "enzyme";
import ContactCard from "./ContactCard";

describe("ContactCard.jsx suite", () => {
  const contactList = [
    {
      name: "Luke Peterson",
      driverType: "Professional",
      driverRank: "4",
      phone: "123456     7890",
      email: "driver.luke@gmail.com",
      profile_image:
        "http://images.unsplash.com/photo-1504575070132-986227df99f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=7ecf0d8a55890fdb50eba8d4def9645d",
    },
    {
      name: "Ziv Avni",
      driverType: "Citizen",
      driverRank: "5",
      phone: "123.456.7895",
      email: "driver.ziv@gmail.com",
    },
    {
      name: "Mustafa Hussain",
      driverType: "Citizen",
      driverRank: "5",
      phone: "123.456.7900",
      email: "driver.mustafa@gmail.com",
      profile_image: "",
    },
  ];
  it("renders correctly for contact 1", () => {
    expect(shallow(<ContactCard contact={contactList[0]} />)).toMatchSnapshot();
  });
  it("renders correctly for contact 2", () => {
    expect(shallow(<ContactCard contact={contactList[1]} />)).toMatchSnapshot();
  });
  it("renders correctly for contact 3", () => {
    expect(shallow(<ContactCard contact={contactList[2]} />)).toMatchSnapshot();
  });
  // it('renders correctly with mouseEnter', () => {
  //   const wrapper = mount(<ContactCard contact={contactList[0]} />);
  //   console.log('rapelbaum - ContactCard.test', wrapper);
  //   wrapper.find('.MuiCard-root').simulate('mouseEnter');
    
  //   // expect(wrapper).toMatchSnapshot();
  // });
});
