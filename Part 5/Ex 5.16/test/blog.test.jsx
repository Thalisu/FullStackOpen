import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BlogForm from "./newBlog";

test("<BlogForm /> updates parent state and calls onSubmit", async () => {
  const createBlog = jest.fn();
  const user = userEvent.setup();

  render(<BlogForm createBlog={createBlog} />);

  const title = screen.getByPlaceholderText("blog title");
  const author = screen.getByPlaceholderText("blog author");
  const url = screen.getByPlaceholderText("blog url");
  const sendButton = screen.getByText("save");

  await user.type(title, "teEste");
  await user.type(author, "euMesmo");
  await user.type(url, "https://algumacoisa.com");
  await user.click(sendButton);

  expect(createBlog.mock.calls).toHaveLength(1);
  expect(createBlog.mock.calls[0][0]).toStrictEqual({
    title: "teEste",
    author: "euMesmo",
    url: "https://algumacoisa.com",
    likes: 0,
  });
});
