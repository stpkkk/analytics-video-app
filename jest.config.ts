import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest/setupTests.ts'],
	moduleNameMapper: {
		'\\.(css|less|sass|scss)$': '<rootDir>/jest/styleMock.ts',
	},
}
export default config
