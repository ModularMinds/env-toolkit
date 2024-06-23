
export const checkMissingVariables = (requiredEnvVariables: string[]) => {

  let missingEnvVars: string[] = [];
  requiredEnvVariables.forEach((envVar) => {
    if (!process.env[envVar]) missingEnvVars.push(envVar)
  });

  return missingEnvVars

};
