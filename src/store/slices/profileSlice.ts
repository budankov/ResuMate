import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PersonalInfo {
  name?: string;
  surname?: string;
  email?: string;
  phone?: string;
  website?: string;
  address?: string;
  zipCode?: string;
  city?: string;
  region?: string;
  country?: string;
}

interface ProfessionalGoals {
  position?: string;
  summary?: string;
}

interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

interface Education {
  school: string;
  degree: string;
  startDate: string;
  endDate?: string;
}

interface ResumeState {
  personalInfo: PersonalInfo;
  professionalGoals: ProfessionalGoals;
  experiences: Experience[];
  education: Education[];
  skills: string[];
  languages: string[];
  summary: string;
}

const initialState: ResumeState = {
  personalInfo: {},
  professionalGoals: {},
  experiences: [],
  education: [],
  skills: [],
  languages: [],
  summary: '',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    savePersonalInfo: (state, action: PayloadAction<PersonalInfo>) => {
      state.personalInfo = { ...state.personalInfo, ...action.payload };
    },
    saveProfessionalGoals: (
      state,
      action: PayloadAction<ProfessionalGoals>,
    ) => {
      state.professionalGoals = {
        ...state.professionalGoals,
        ...action.payload,
      };
    },
    saveExperience: (state, action: PayloadAction<Experience[]>) => {
      state.experiences = action.payload;
    },
    saveEducation: (state, action: PayloadAction<Education[]>) => {
      state.education = action.payload;
    },
    saveSkills: (state, action: PayloadAction<string[]>) => {
      state.skills = action.payload;
    },
    saveLanguages: (state, action: PayloadAction<string[]>) => {
      state.languages = action.payload;
    },
    saveSummary: (state, action: PayloadAction<string>) => {
      state.summary = action.payload;
    },
  },
});

export const {
  savePersonalInfo,
  saveProfessionalGoals,
  saveExperience,
  saveEducation,
  saveSkills,
  saveLanguages,
  saveSummary,
} = profileSlice.actions;

export default profileSlice.reducer;
