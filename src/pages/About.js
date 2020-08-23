import React from "react";
import PropTypes from "prop-types";

import i18n from "@i18n";
import containerTypes from "@/constants/containerTypes";

import Section from "@/components/Section";
import styled from "styled-components";

const About = ({ className }) => {
	return (
		<Section first type={containerTypes.text}>
			<div className={className}>
				<div>
					<h5>{ i18n.t("about.title") }</h5>
					<p>A cena se repetia diariamente no bairro Buraco do Afonso, periferia de Guarabira, na Paraíba: era chegar da feira, depois de trabalhar ao lado da mãe e das três irmãs, que o jovem João Paulo tomava um banho, comia alguma coisa rapidamente e saía para jogar bola na rua.</p>
					<p>A vontade dele sempre foi virar jogador profissional, mas a realidade, por vezes, obrigou que o sonho ficasse em segundo plano. Para ajudar a mãe gari a sustentar a família - os pais se separaram quando ele ainda era criança, foi feirante até os 20 anos e precisou largar o futebol por um tempo.</p>
				</div>
				<div className="second">
					<h4>Ajude o Macacast</h4>
					<p>As responsabilidades precoces não possibilitaram que João Paulo fizesse categorias de base. Ele jogava na várzea, e depois de uma tentativa frustrada em 2008 de entrar para um time, o agora meia largou o futebol para se dedicar exclusivamente ao trabalho de feirante, viajando até o Rio Grande do Norte para vender frutas. Ficava fora de casa de terça a domingo.</p>
					<a href="https://apoia.se/macacast">
						<span className="underline">Apoie agora mesmo</span>
						<span className="arrow">{">"}</span>
					</a>
				</div>
				<div className="second">
					<h4> Nosso time </h4>
				</div>
			</div>
		</Section>
	);
};

About.propTypes = {
	className: PropTypes.string
}

export default styled(About)`
	h5 {
		font-size: 35px;
	}

	.second {
		margin-top: 50px;
	}

	a .underline {
	}

	a .arrow {
		margin-left: 10px;
		border-bottom: 2px solid transparent;
	}
`;
