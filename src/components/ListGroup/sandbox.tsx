/* eslint-disable */
import React, { Fragment } from "react";
import { ListGroup } from "./ListGroup";
import { ListGroupItem } from "./__ListGroupItem/ListGroupItem";
import { Badge } from "../Badge/Badge";
import { Button } from "../Button/Button";

export const ListGroupSandBox: React.FC<{}> = () => (
	<Fragment>
		<h2>
			<span>1. Base Group list:</span>
		</h2>
		<ListGroup tag="ul">
			<ListGroupItem tag="li">List item 1</ListGroupItem>
			<ListGroupItem tag="li">List item 2</ListGroupItem>
			<ListGroupItem tag="li">List item 3</ListGroupItem>
			<ListGroupItem tag="li">List item 4</ListGroupItem>
		</ListGroup>

		<h2>
			<span>2. Group list with active and disabled elements:</span>
		</h2>
		<ListGroup tag="ul">
			<ListGroupItem tag="li" active>
				List item 1
			</ListGroupItem>
			<ListGroupItem tag="li">List item 2</ListGroupItem>
			<ListGroupItem tag="li" disabled>
				List item 3
			</ListGroupItem>
			<ListGroupItem tag="li">List item 4</ListGroupItem>
		</ListGroup>

		<h2>
			<span>3. Group list with custom components:</span>
		</h2>
		<ListGroup tag="ul">
			<ListGroupItem tag="li">
				List item 1
				<Badge value={2} inline />
			</ListGroupItem>
			<ListGroupItem tag="li">
				List item 2
				<Badge value="new" inline />
			</ListGroupItem>
			<ListGroupItem tag="li">
				List item 3
				<Badge value={10} warning inline />
			</ListGroupItem>
			<ListGroupItem tag="li">
				List item 4<Button>Update</Button>
			</ListGroupItem>
		</ListGroup>

		<h2>
			<span>4. Group list links:</span>
		</h2>
		<ListGroup tag="ul">
			<ListGroupItem tag="li" href="/" active>
				List item 1
			</ListGroupItem>
			<ListGroupItem tag="li" href="/">
				List item 2
			</ListGroupItem>
			<ListGroupItem tag="li" href="/">
				List item 3
			</ListGroupItem>
			<ListGroupItem tag="li" href="/">
				List item 4
			</ListGroupItem>
		</ListGroup>
	</Fragment>
);

/* eslint-enable */
