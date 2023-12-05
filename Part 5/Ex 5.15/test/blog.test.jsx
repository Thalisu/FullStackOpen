import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Blog from "./blog";

describe("<Togglable />", () => {
  let container;
  const blog = {
    title: "aloAloAAAo",
    author: "eumesmo",
    url: "https://sssssss.com",
    likes: 2,
  };
  const mockHandler = jest.fn();

  beforeEach(() => {
    container = render(<Blog blog={blog} like={mockHandler} />).container;
  });

  test("verify two clicks", async () => {
    const user = userEvent.setup();
    const show = screen.getByText("show");
    await user.click(show);
    const like = screen.getByText("like");
    await user.dblClick(like);
    expect(mockHandler.mock.calls).toHaveLength(2);
  });
});
