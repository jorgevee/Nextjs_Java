import { BACKEND_API } from "./constants";
export default async function apiAuthSignIn(
  credentials: Record<"email" | "username" | "password", string> | undefined
) {
  try {
    const response = await fetch(`${BACKEND_API}/api/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials as any),
    });
    //if 401 unauthorized
    if (!response.ok) {
      return new Error("Invalid credentials");
    }

    const data = await response.json();
    //verify jwt access token
    // const decoded = jwt.verify(data.accessToken, process.env.JWT_SECRET);
    if (data.error) {
      return { error: data.message };
    }

    const userID = data.userID;
    return { ...data, userID };
  } catch (error) {
    // return { error: error.message };
    console.log(error?.message, "No connection to Backend");
    return error;
  }
}
export async function apiAuthSignUp(credentials: {
  username: string;
  email: string;
  password: string;
}) {
  try {
    console.log(BACKEND_API);
    const response = await fetch(`${BACKEND_API}/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    console.log("screds", credentials);
    if (!response.ok) {
      return new Error("Sign-up failed");
    }

    const data = await response.json();
    console.log("data", data);
    if (data.error) {
      return { error: data.message };
    }

    return data; // Return the response data on successful sign-up
  } catch (error) {
    console.log(error?.message, "No connection to Backend");
    return error;
  }
}

export const BAPI = process.env.BACKEND_SERVER as string;
export const Token = process.env.BEARER as string;
