import React from 'react'

import { Group } from '@vx/group'
import { Tree } from '@vx/hierarchy'
import { LinkHorizontal } from '@vx/shape'
import { hierarchy } from 'd3-hierarchy'
import { LinearGradient } from '@vx/gradient'


const stageWidth = document.documentElement.clientWidth
const stageHeight = document.documentElement.clientHeight-80


const raw = {
	"name": "ZERØ",
	"children": [
	{ "name": "Development",
		"children": [
			{ "name": "Chain" },
			{ "name": "API" },
			{ "name": "UI" }
		]
	}, {
		"name": "Staging"
	}, {
		"name": "Production"
	}]
}


function Node({ node, events }) {

	const width = 80
	const height = 40

	return (
		<Group top={node.x} left={node.y}>
			{node.depth === 0 &&
				<circle
					r={36}
					fill="url('#lg')"
				/>
			}
			{node.depth !== 0 &&
				<rect
					height={height}
					width={width}
					y={-height / 2}
					x={-width / 2}

					stroke={node.children ? "#03c0dc" : "#26deb0"}
					strokeWidth={1}
					strokeDasharray={!node.children ? "2,2" : "0"}
					strokeOpacity={!node.children ? .6 : 1}
					rx={!node.children ? 10 : 0}
					onClick={() => {
						alert(`clicked: ${JSON.stringify(node.data.name)}`)
					}}
				/>
			}
			<text
				dy={".33em"}
				fontSize={9}
				fontFamily="Arial"
				textAnchor={"middle"}
				style={{ pointerEvents: "none" }}
				fill={node.depth === 0 ? "#71248e" : node.children ? "white" : "#26deb0"}
			>
				{node.data.name}
			</text>
		</Group>
	)

}

function Link ({ link }) {

	return (
		<LinkHorizontal
			data={link}
			stroke="#374469"
			strokeWidth="1"
			fill="none"
		/>
	)

}

export default ({

	width = stageWidth,
	height = stageHeight,
	events = false,
	margin = {
		top: 80,
		left: 80,
		right: 80,
		bottom: 80,
	}

}) => {

	const data = hierarchy(raw)

	return (
		<svg width={width} height={height}>
			<LinearGradient id="lg" from="#fd9b93" to="#fe6e9e" />
			<rect
				width={width}
				height={height}
				fill="none"
			/>
			<Tree
				top={margin.top}
				left={margin.left}
				root={data}
				size={[
					height - margin.top - margin.bottom,
					width - margin.left - margin.right
				]}
				nodeComponent={Node}
				linkComponent={Link}
			/>
		</svg>
	)

}
