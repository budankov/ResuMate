import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PersonalInfo {
  name: string;
  surname: string;
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

interface WorkExperience {
  position: string;
  company: string;
  location?: string;
  website?: string;
  responsibilities?: string;
  startDate?: string;
  endDate?: string;
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
  workExperience: WorkExperience[];
  education: Education[];
  skills: string[];
  languages: string[];
  summary: string;
}

const initialState: ResumeState = {
  personalInfo: {},
  professionalGoals: {},
  workExperience: [],
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
    saveWorkExperience: (state, action: PayloadAction<WorkExperience[]>) => {
      state.workExperience = action.payload;
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
  saveWorkExperience,
  saveEducation,
  saveSkills,
  saveLanguages,
  saveSummary,
} = profileSlice.actions;

export default profileSlice.reducer;
