interface NavigationData {
    id: string;
    name: {
        [key: string]: string;
    };
    nodes?: NavigationData[];
    body?: {
        [key: string]: string;
    };
}

export const navigationData: NavigationData[] = [
    {
        id: 'services',
        name: {
            ru: 'Сервисы',
            us: 'Services'
        },
        nodes: [
            {
                id: 'clouds',
                name: {
                    ru: 'Облачные вычисления',
                    us: 'Cloud solving',
                },
                nodes: [
                    {
                        id: 'cloud-consult',
                        name: {
                            ru: 'Консультация',
                            us: 'Cloud solving',
                        },
                        body: {
                            ru: 'Конслультация по базам данных',
                            us: 'Consulting about database'
                        }
                    },
                    {
                        id: 'cloud-interface',
                        name: {
                            ru: 'Облачные интерфейсы',
                            us: 'Cloud interfaces',
                        },
                        body: {
                            ru: 'Специфические интерфейсы облачного хранилища',
                            us: 'Specific interface for cloud storage'
                        }
                    },
                    {
                        id: 'cloud-consult2',
                        name: {
                            ru: 'Консультация',
                            us: 'Cloud solving',
                        },
                        body: {
                            ru: 'Конслультация по базам данных',
                            us: 'Consulting about database'
                        }
                    },
                    {
                        id: 'cloud-interface2',
                        name: {
                            ru: 'Облачные интерфейсы',
                            us: 'Cloud interfaces',
                        },
                        body: {
                            ru: 'Специфические интерфейсы облачного хранилища',
                            us: 'Specific interface for cloud storage'
                        }
                    },
                    {
                        id: 'cloud-consult3',
                        name: {
                            ru: 'Консультация',
                            us: 'Cloud solving',
                        },
                        body: {
                            ru: 'Конслультация по базам данных',
                            us: 'Consulting about database'
                        }
                    },
                    {
                        id: 'cloud-interface3',
                        name: {
                            ru: 'Облачные интерфейсы',
                            us: 'Cloud interfaces',
                        },
                        body: {
                            ru: 'Специфические интерфейсы облачного хранилища',
                            us: 'Specific interface for cloud storage'
                        }
                    },
                    {
                        id: 'cloud-consult4',
                        name: {
                            ru: 'Консультация',
                            us: 'Cloud solving',
                        },
                        body: {
                            ru: 'Конслультация по базам данных',
                            us: 'Consulting about database'
                        }
                    },
                    {
                        id: 'cloud-interface4',
                        name: {
                            ru: 'Облачные интерфейсы',
                            us: 'Cloud interfaces',
                        },
                        body: {
                            ru: 'Специфические интерфейсы облачного хранилища',
                            us: 'Specific interface for cloud storage'
                        }
                    },
                ]
            },
            {
                id: 'servers',
                name: {
                    ru: 'Выделенные серверы',
                    us: 'Dedicated servers',
                }
            },
            {
                id: 'platform',
                name: {
                    ru: 'Платформенные сервисы',
                    us: 'Platform services',
                }
            },
            {
                id: 'security',
                name: {
                    ru: 'Информационная безопасность',
                    us: 'Security',
                }
            },
        ]
    },
    {
        id: 'managed-it',
        name: {
            ru: 'Менеджмент IT',
            us: 'Managed IT'
        },
        nodes: [
            {
                id: 'clouds',
                name: {
                    ru: 'Что-то другое',
                    us: 'Somethin else',
                },
                nodes: [
                    {
                        id: 'cloud-consult',
                        name: {
                            ru: 'Консультация',
                            us: 'Cloud solving',
                        },
                        body: {
                            ru: 'Конслультация по базам данных',
                            us: 'Consulting about database'
                        }
                    },
                    {
                        id: 'cloud-interface',
                        name: {
                            ru: 'Облачные интерфейсы',
                            us: 'Cloud interfaces',
                        },
                        body: {
                            ru: 'Специфические интерфейсы облачного хранилища',
                            us: 'Specific interface for cloud storage'
                        }
                    },
                    {
                        id: 'cloud-consult2',
                        name: {
                            ru: 'Консультация',
                            us: 'Cloud solving',
                        },
                        body: {
                            ru: 'Конслультация по базам данных',
                            us: 'Consulting about database'
                        }
                    },
                    {
                        id: 'cloud-interface2',
                        name: {
                            ru: 'Облачные интерфейсы',
                            us: 'Cloud interfaces',
                        },
                        body: {
                            ru: 'Специфические интерфейсы облачного хранилища',
                            us: 'Specific interface for cloud storage'
                        }
                    },
                    {
                        id: 'cloud-consult3',
                        name: {
                            ru: 'Консультация',
                            us: 'Cloud solving',
                        },
                        body: {
                            ru: 'Конслультация по базам данных',
                            us: 'Consulting about database'
                        }
                    },
                    {
                        id: 'cloud-interface3',
                        name: {
                            ru: 'Облачные интерфейсы',
                            us: 'Cloud interfaces',
                        },
                        body: {
                            ru: 'Специфические интерфейсы облачного хранилища',
                            us: 'Specific interface for cloud storage'
                        }
                    },
                    {
                        id: 'cloud-consult4',
                        name: {
                            ru: 'Консультация',
                            us: 'Cloud solving',
                        },
                        body: {
                            ru: 'Конслультация по базам данных',
                            us: 'Consulting about database'
                        }
                    },
                    {
                        id: 'cloud-interface4',
                        name: {
                            ru: 'Облачные интерфейсы',
                            us: 'Cloud interfaces',
                        },
                        body: {
                            ru: 'Специфические интерфейсы облачного хранилища',
                            us: 'Specific interface for cloud storage'
                        }
                    },
                ]
            },
            {
                id: 'servers',
                name: {
                    ru: 'Выделенные серверы',
                    us: 'Dedicated servers',
                }
            },
            {
                id: 'platform',
                name: {
                    ru: 'Платформенные сервисы',
                    us: 'Platform services',
                }
            },
            {
                id: 'security',
                name: {
                    ru: 'Информационная безопасность',
                    us: 'Security',
                }
            },
        ]
    },
    {
        id: 'telecom',
        name: {
            ru: 'Телекоммуникация',
            us: 'Telecom Solutions',
        }
    },
    {
        id: 'about-us',
        name: {
            ru: 'О нас',
            us: 'About Us'
        }
    },
]