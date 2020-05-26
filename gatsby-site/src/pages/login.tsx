import React from "react"
import "antd/dist/antd.css" // or 'antd/dist/antd.less'
import { StaticQuery, graphql } from "gatsby"

import { Form, Input, Button, Checkbox } from "antd"

function renderNames(data: any) {
  console.log({ data })

  return data.allNamesJson.edges.map(({ node }) => (
    <li key={node.name}>{node.name}</li>
  ))
}

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
}

const login = () => {
  const onFinish = values => {
    console.log("Success:", values)
  }

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo)
  }

  return (
    <div>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
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

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <ul>
        <StaticQuery
          query={graphql`
            query NamesQuery {
              allNamesJson {
                edges {
                  node {
                    name
                  }
                }
              }
            }
          `}
          render={data => renderNames(data)}
        ></StaticQuery>
      </ul>
    </div>
  )
}

export default login
