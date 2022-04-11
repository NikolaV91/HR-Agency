import React from "react";

export const tokenContext = React.createContext();
export const candidatesContext = React.createContext();
export const interviewsContext = React.createContext();
export const companiesContext = React.createContext();

export const TokenProvider = tokenContext.Provider;
export const CandidatesProvider = candidatesContext.Provider;
export const InterviewsProvider = interviewsContext.Provider;
export const CompaniesProvider = companiesContext.Provider;