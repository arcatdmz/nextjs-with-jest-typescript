import { configure } from "enzyme";
import ReactAdapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new ReactAdapter() });
