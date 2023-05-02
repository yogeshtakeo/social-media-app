import { TextInput, Label, Checkbox, Button } from "flowbite-react";

const LoginComponent = (): JSX.Element => {
  return (
    <form className="flex flex-col gap-4">
      <h1 className="text-2xl text-center">Login</h1>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="name@flowbite.com"
          required={true}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1" type="password" required={true} />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit">Submit</Button>
      <Button outline>Create a new account </Button>
    </form>
  );
};

export default LoginComponent;
