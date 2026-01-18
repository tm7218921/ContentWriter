
import { GoogleGenAI, Type } from "@google/genai";

export const optimizePortfolio = async (currentData: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `You are a professional hiring editor for a creative media agency. Optimize the following content writer portfolio data. 
    Focus on Mumbai-based creative roles (like Terribly Tiny Tales or ScoopWhoop). 
    Avoid SEO jargon. Instead, emphasize "voice," "storytelling," "emotional depth," and "authenticity."
    Make the descriptions human and compelling.
    
    Data to optimize:
    ${currentData}
    
    Return the result in JSON format matching the structure of the provided data.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          brandStatement: { type: Type.STRING },
          intro: { type: Type.STRING },
          aboutMe: { type: Type.STRING },
          samples: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                title: { type: Type.STRING },
                category: { type: Type.STRING },
                description: { type: Type.STRING },
                link: { type: Type.STRING },
                skillsHighlighted: { type: Type.ARRAY, items: { type: Type.STRING } }
              },
              required: ["id", "title", "description"]
            }
          }
        },
        required: ["brandStatement", "intro", "aboutMe", "samples"]
      }
    }
  });

  return JSON.parse(response.text || "{}");
};

export const generateResumeContent = async (currentData: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-pro-preview",
    contents: `Transform this creative storytelling portfolio into professional resume content for a Content Writer position. 
    Focus on the "Creative Voice" and "Narrative Ability." 
    Since the candidate is an Engineer, highlight "Structured Creativity" and "Clarity."
    Do NOT mention SEO. Focus on "Audience Connection" and "Multi-genre writing."
    
    Data: ${currentData}`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          summary: { type: Type.STRING, description: "Professional summary for resume" },
          experienceBullets: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "3-5 high-impact bullet points focusing on creative writing and storytelling"
          }
        },
        required: ["summary", "experienceBullets"]
      }
    }
  });

  return JSON.parse(response.text || "{}");
};
