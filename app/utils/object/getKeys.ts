// import { Project } from 'ts-morph'

// // initName is name of the interface file below the root, ./src is considered the root
// const getKeys = (intName: string): string[] => {
// 	const project = new Project()
// 	const sourceFile = project.addSourceFileAtPath(`./src/${intName}.ts`)
// 	const node = sourceFile.getInterface(intName)!
// 	const allKeys = node.getProperties().map((p) => p.getName())

// 	return allKeys
// }

// export default getKeys
// export const objKeys = (obj: object) =>
// 	Object.keys(obj) as Array<keyof typeof obj>
export function getKeys<T extends Object>(obj: T): Array<keyof T> {
	return Array.from(Object.keys(obj)) as any
}
