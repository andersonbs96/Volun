# volun

Projeto feito utilizando REACT com VITE.JS

# 1- Requisitos Funcionais:



Cadastro de Usuários:

Permitir que novos usuários se cadastrem fornecendo nome, e-mail, telefone e habilidades.

Login através de e-mail/senha ou contas do Google, Facebook, etc.

Autenticação de login e recuperação de e-mail/senha.



Perfil do Voluntário:

Criar e editar perfis com informações pessoais, áreas de interesse e horários disponíveis.

Upload de fotos de perfil e currículos.

Listagem de Oportunidades de Voluntariado:

Exibir uma lista de oportunidades com detalhes como data, local, descrição e requisitos.

Filtragem e busca de oportunidades por localização, tipo de atividade e data.



Inscrição em Oportunidades:

Permitir que os voluntários se inscrevam nos eventos.



Comunicação e Feedback:

Aba de comentários para Eventos para usuarios interagirem no périodo de Pré- evento.



Gerenciamento de Eventos:

Usuarios cadastrados poderao criar uma Organização/Grupo

as organizações/grupos servirão poderão servir tanto como entidades para ONG/empresas que como para Usuarios que queiram criar comunidade que outros usuarios podem seguir e receber notificaçoes de Eventos do mesmo

Organizações poderão criar e gerenciar eventos através de uma interface fácil de usar.

Voluntários poderão visualizar eventos futuros e histórico de eventos que ele participou em seu perfil.

Barra de Pesquisa de Eventos:

Barra de pesquisa com filtragem por Tags de Eventos/ Razao social de organizacoes.

Exibição de eventos mais recentes no menu geral com informações essenciais.



Público Alvo

Organizadores/ONGs/Comunidades: Podem Planejar eventos beneficentes e promover trabalhos voluntários para pequenas comunidades.

Voluntários: Podem Inscrever-se para os trabalhos voluntários/Eventos disponíveis.

Não Cadastrados:

pode visualizar o site e ver algumas infos sobre ele, mas ele não possui acesso às funcionalidades completas, necessitando se cadastrar para participar.



Plataformas Suportadas

Desktop e Mobile

Organizar eventos, especialmente para representantes de empresas ou ONGs.

Aplicação possui versão Web responsiva e sua Versão Mobile.



Requisitos de Implantação

Front-End: React com Vite JS.

Back-End: Node JS.

Banco de Dados: NoSQL (Firebase, Supabase ou MongoDB).



# 2 - Requisitos Não Funcionais

Desempenho:

Suporte a muitos usuários simultaneamente sem perda de performance, com carregamento rápido.

Segurança:

Criptografia para proteger dados sensíveis e garantir a segurança das interações.

Usabilidade:

Interface intuitiva e fácil de navegar, com suporte para dispositivos móveis.

Escalabilidade:

Arquitetura que permita a adição de novos recursos e o crescimento no número de usuários e oportunidades.

Acessibilidade:

Acessível a pessoas com deficiências, com opções de contraste e navegação por teclado.

Manutenabilidade:

Design modular que facilite a manutenção e atualizações, com boa documentação do código.



Compatibilidade:

Compatível com os principais navegadores e sistemas operacionais utilizados pelo publico alvo, testado em diversos ambientes.



Backup e Recuperação:

Implementação de backups regulares e um plano de recuperação de desastres para assegurar a continuidade do serviço.



Proteção e Criptografia:

Criptografia para proteger dados sensiveis do usuário.



Restrição de Idade:

Acesso restrito de idade livre.



Conformidade com Normas:

Eventos devem seguir normas e específicas para navegar e utilizar as ferramentas da Aplicação.



Moderação:

Equipe de moderação para supervisar o aplicativo, gerenciar, banir, adverter usuarios e ferramentas para denúncia de conteudos que desrespeitam as normas da aplicação.

A equipe possuira um Layout Proprio



Localização

Localização Atual:

Primeiramente  o usuario deve permitir que a Aplicação utilize a localização atual dele.

Exibir a localidade atual dos usuários.

Localização de Eventos:

Mostrar onde os eventos estão acontecendo por meio de um Mapa.



# 3 - REGRAS DE NÉGOCIO P/ PROJETO



Cadastro de Usuários:

Somente usuários maiores de 18 anos podem criar uma conta na plataforma.

Um CPF pode estar associado a apenas uma conta de usuário.

O e-mail utilizado para cadastro deve ser único e não pode ser reutilizado em outra conta.

O telefone deve seguir o formato nacional (DDD + número) e ser validado para evitar entradas incorretas.



Criação e Gerenciamento de Organizações:

Somente usuários cadastrados e autenticados podem criar uma organização ou grupo.

Uma organização pode ter múltiplos administradores, mas deve ter pelo menos um administrador principal.

Cada organização deve fornecer um CNPJ válido para ser verificada como entidade oficial (para ONGs e empresas).



Criação de Eventos:

Somente organizações verificadas podem criar eventos públicos.

Todos os eventos devem ser aprovados pela equipe de moderação antes de serem publicados.

Um evento só pode ser criado se tiver pelo menos uma data e local definidos.

Deve haver uma política clara sobre o tipo de conteúdo permitido. Conteúdos ofensivos, discriminatórios ou ilegais devem ser removidos, e os responsáveis podem ser banidos ou advertidos.

Eventos com conteúdo impróprio ou que violem os termos de uso serão removidos pela moderação.



Inscrição em Eventos:

Cada usuário pode se inscrever em múltiplos eventos, desde que as datas não conflitem.

Usuários podem cancelar inscrições até um certo prazo antes do evento. Após esse prazo, cancelamentos podem ter implicações (como penalidades ou bloqueio para futuras inscrições)

Após o término do evento, os usuários receberão um feedback automático, solicitando a avaliação da experiência.



Moderação:

Moderadores podem revisar eventos, perfis de usuários, e comentários para garantir conformidade com as políticas da aplicação.

Conteúdos denunciados por usuários serão analisados em até 48 horas.

Moderadores têm o poder de suspender contas, remover conteúdos e banir usuários com comportamento inapropriado.

Toda ação de moderação deve ser registrada no sistema com a identificação do moderador responsável.



Comunicação e Feedback:

Os comentários em eventos só podem ser feitos por usuários inscritos no evento.

Comentários abusivos ou que contenham l_inguagem ofensiva serão removidos pela moderação, e o autor pode_rá ser advertido ou banido.


Busca e Filtragem de Eventos:

Os resultados de busca devem priorizar eventos que estão mais próximos geograficamente do usuário.

Eventos que estão mais próximos da data atual devem ser priorizados na exibição dos resultados.

Tags e categorias utilizadas em eventos devem ser selecionadas de uma lista predefinida para manter consistência.


Conformidade Legal:

A aplicação deve seguir as regulamentações de proteção de dados, garantindo que os dados dos usuários sejam tratados com a devida privacidade e segurança.

Todos os usuários devem aceitar os termos de serviço e políticas de privacidade ao se cadastrarem na plataforma e conceder permissão para utilizar localização do seu dispositivo.

Notificações e Comunicações:

Os usuários devem receber notificações para eventos futuros em que estão inscritos, bem como atualizações importantes (como mudanças de data ou local e etc…).

Notificações sobre ações de moderação (como advertências,banimentos ou suspensões) devem ser enviadas aos usuários afetados.
