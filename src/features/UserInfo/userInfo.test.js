import { render, waitFor } from "@testing-library/react";
import { UserInfo } from "./UserInfo";

describe("UserInfo", () => {
    it("should render an avatar with the provided username as the source and alt text", () => {
        const username = "test_username";
        const { getByAltText } = render(<UserInfo username={username} />);

        const avatar = getByAltText(username);
        expect(avatar).toBeInTheDocument();
        expect(avatar).toHaveAttribute("src", username);
        });
});

