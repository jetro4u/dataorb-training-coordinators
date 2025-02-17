'use client'
import React from "react"; 
import Link from "next/link";
import Image from "next/image";

import errorImg from "@/public/error.png";

interface GlobalErrorProps {
	reset: () => void;
  }

  export default function GlobalError({ reset }: GlobalErrorProps) {
  return (
		<div className="not-found-area ptb-100">
			<div className="d-table">
				<div className="d-table-cell">
					<div className="container">
						<div className="not-found-content">
							<Image src={errorImg} alt="error-image" />
							<h3>Oops! That page can&apos;t be found</h3>
							<p>
								The page you are looking for might have been
								removed had its name changed or is temporarily
								unavailable.
							</p>
								<div>
									<button onClick={() => reset()}>Try again</button>
								</div>
							<Link legacyBehavior href="/">
								<a className="btn-style-one red-light-color">
									Back to Home{" "}
									<i className="bx bx-chevron-right"></i>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}