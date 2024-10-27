import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor degree in Production Engineering',
		location: 'Mumbai, India',
		logo: Assets.Unknown,
		name: 'Yashraj Pardeshi',
		organization: 'VJTI, Mumbai',
		period: { from: new Date(2021, 12), to: new Date(2025, 06) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['Industrial Engineering', 'Business Analytics (ANNOVA, Machine Learning Algorithms)', 'Industry 4.0 and Internet of Things (IoT)', '(Lean Production System, Smart Factories)', 'Computer Programming and Problem Solving (C++)', 'Electrical and Electronics Engineering', 'CAD CAM CIM', 'Mechatronics and Automation', 'Probability and Statistics', '(t-tests, chi-square tests)']
	}
];

export const title = 'Education';
