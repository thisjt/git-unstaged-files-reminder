import type gitDiffReminder from '.';

export type Options = {
	ignoredPaths?: string[];
	command?: string;
	threshold?: number;
	customInfo?: string;
	customWarn?: string;
};

export type gitDiffReminder = typeof gitDiffReminder;
