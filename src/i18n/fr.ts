import frenchMessages from 'ra-language-french';

export default {
    simple: {
        action: {
            close: 'Fermer',
            resetViews: 'Réinitialiser des vues',
        },
        'create-post': 'Nouveau post',
    },
    ...frenchMessages,
    resources: {
        posts: {
            name: 'Article |||| Articles',
            fields: {
                average_note: 'Note moyenne',
                body: 'Contenu',
                category: 'Catégorie',
                comments: 'Commentaires',
                commentable: 'Commentable',
                commentable_short: 'Com.',
                created_at: 'Créé le',
                notifications: 'Destinataires de notifications',
                nb_view: 'Nb de vues',
                nb_comments: 'Nb de commentaires',
                password: 'Mot de passe (si protégé)',
                pictures: 'Photos associées',
                'pictures.url': 'URL',
                'pictures.metas.authors': 'Auteurs',
                'pictures.metas.authors.name': 'Nom',
                authors: 'Auteurs',
                'authors.user_id': 'Nom',
                'authors.role': 'Rôle',
                published: 'Publié le',
                teaser: 'Description',
                tags: 'Catégories',
                title: 'Titre',
                views: 'Vues',
            },
        },
        comments: {
            name: 'Commentaire |||| Commentaires',
            fields: {
                body: 'Contenu',
                created_at: 'Créé le',
                post_id: 'Article',
                author: {
                    name: 'Auteur',
                },
            },
        },
        users: {
            name: 'Utilisateur |||| Utilisateurs',
            fields: {
                name: 'Nom',
                role: 'Rôle',
            },
        },
    },
    post: {
        list: {
            search: 'Recherche',
        },
        form: {
            summary: 'Résumé',
            body: 'Contenu',
            miscellaneous: 'Extra',
            comments: 'Commentaires',
        },
        edit: {
            title: 'Article "%{title}"',
        },
    },
    comment: {
        list: {
            about: 'Au sujet de',
        },
    },
    user: {
        list: {
            search: 'Recherche',
        },
        form: {
            summary: 'Résumé',
            security: 'Sécurité',
        },
    },
    pos: {
        search: 'Rechercher',
        configuration: 'Configuration',
        language: 'Langue',
        theme: {
            name: 'Theme',
            light: 'Clair',
            dark: 'Obscur',
        },
        dashboard: {
            monthly_revenue: 'CA à 30 jours',
            month_history: "Chiffre d'affaire sur 30 jours",
            new_orders: 'Nouvelles commandes',
            pending_reviews: 'Commentaires à modérer',
            all_reviews: 'Voir tous les commentaires',
            new_customers: 'Nouveaux clients',
            all_customers: 'Voir tous les clients',
            pending_orders: 'Commandes à traiter',
            order: {
                items:
                    'par %{customer_name}, un poster |||| par %{customer_name}, %{nb_items} posters',
            },
            welcome: {
                title: 'Bienvenue sur la démo admin',
                subtitle:
                    "Ceci est le démo. ",

            },
        },
        menu: {
            sales: 'Ventes',
            catalog: 'Catalogue',
            customers: 'Clients',
        },
        events: {
            review: {
                title: 'Commente sur "%{product}"',
            },
            order: {
                title: 'Commande 1 poster |||| Commande %{smart_count} posters',
            },
        },
    },
};
