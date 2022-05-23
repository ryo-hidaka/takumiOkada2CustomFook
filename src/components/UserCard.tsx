import { VFC } from "react";
import { userProfile } from "../types/userProfile";

type Props = { user: userProfile };

export const UserCard: VFC<Props> = (props) => {
  const { user } = props;

  const style = {
    border: "solid 1px #ccc",
    borderRadius: "8px",
    padding: "0 16px",
    margin: "8px"
  };

  return (
    <div style={style}>
      <dl>
        <dd>名前</dd>
        <dt>{user.name}</dt>
        <dd>メール</dd>
        <dt>{user.email}</dt>
        <dd>住所</dd>
        <dt>{user.address}</dt>
      </dl>
    </div>
  );
};
