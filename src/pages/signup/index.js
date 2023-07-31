import { Button, Checkbox, Form, Input } from "antd";
import { signIn } from "next-auth/react";
const onFinish = (values) => {
  // console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  // console.log("Failed:", errorInfo);
};
const SignUpPage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          validateStatus="error"
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your valid!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button className="bg-gray-300" type="dashed" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button 
          className="bg-gray-200"
            block
            type="default"
            onClick={() =>
              signIn("github", {
                callbackUrl: "https://pc-builder-next-js-mdshafikulislam1.vercel.app",
              })
            }
          >
            SignIn With Github
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default SignUpPage;
