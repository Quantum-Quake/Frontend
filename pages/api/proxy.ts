import { Language } from "@/enums/language";
import axios, { AxiosResponse } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { language, query } = req.body;
    // console.log(query, language);
    // console.log(req.body);

    let inputLanguage: string = "en";

    if (language === Language.hindi) {
      inputLanguage = "hi";
    } else if (language === Language.marathi) {
      inputLanguage = "mr";
    }

    const response: AxiosResponse = await axios.get(
      `http://2695-34-142-195-124.ngrok-free.app/get/${inputLanguage}/${query}`
    );

    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    console.error("Error proxying request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
